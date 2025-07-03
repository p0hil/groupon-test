import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';
import { SeederModule } from './seeder/seeder.module';
import { DealsModule } from './deals/deals.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
            imports: [ConfigModule.forFeature(appConfig)],
            useFactory: (config: ConfigType<typeof appConfig>) => {
                return {
                    uri: config.mongoUri,
                };
            },
            inject: [appConfig.KEY],
        }),
        // Just to serve prebuilt spa in single Heroku app
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
        DealsModule,
        SeederModule, // Put init data
    ],
})
export class AppModule {}

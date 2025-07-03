import { registerAs } from '@nestjs/config';
import * as process from 'process';

export default registerAs('appConfig', () => ({
    mongoUri: process.env.MONGO_URI,
}));

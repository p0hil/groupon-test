import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { App } from 'supertest/types';
import { DealsService } from '../../src/deals/deals.service';

describe('Deals feed', () => {
    let app: INestApplication;
    let dealsService: DealsService;

    beforeAll(async () => {
        const ref: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();


        app = ref.createNestApplication();
        await app.init();

        // Data should be filled with SeederModule already, but in test db from local env

        dealsService = ref.get(DealsService)
    });

    it('should return right filtered feed', async () => {
        const limit = 3;

        const feed = await dealsService.getFeed({ sortBy: 'price', sortOrder: 'asc' }, 0, limit);
        expect(feed.length).toBe(limit);

        for (let i = 1; i < limit; i++) {
            expect(feed[i].discountPrice).toBeGreaterThanOrEqual(feed[i - 1].discountPrice);
        }
    });

    it('should return feed', () => {
        return request(app.getHttpServer() as App)
            .post('/deals')
            .expect(200)
            .expect('Content-Type', /json/);
    });

    afterAll(async () => {
        await app.close();
    });
});

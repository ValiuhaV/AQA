import { expect } from 'chai';
import { CatApi } from '../src/services/cat-api';

describe('The Cat API Integration Tests(images → favourites → votes)', function () {
    this.timeout(15000);

    const api = new CatApi();

    let imageId: string;
    let imageUrl: string;
    let favouriteId: number;

    it('1. GET /images/search - should fetch an image and save id and url', async function () {
        const res = await api.searchImages(1);
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('array').that.is.not.empty;

        imageId = res.data[0].id;
        imageUrl = res.data[0].url;

        expect(imageId).to.be.a('string');
        expect(imageUrl).to.be.a('string');
    });

    it('2. POST /favourites - should add this image to favourite', async function () {
        const res = await api.createFavourite(imageId);
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('object');
        expect(res.data.id).to.exist;

        favouriteId = res.data.id;
    });

    it('3. GET /favourites - should contain our image with matching id and url', async function () {
        const res = await api.getFavourites();
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('array').that.is.not.empty;

        const found = res.data.some(f =>
            f.image &&
            f.image.id === imageId &&
            f.image.url === imageUrl
        );

        expect(found, 'Image ID and URL should match').to.be.true;
    });

    it('4. POST /votes - should vote for this image', async function () {
        const res = await api.createVote(imageId, 1);
        expect(res.status).to.equal(201);
        expect(res.data).to.be.an('object');
        expect(res.data.id).to.exist;
    });

    it('5. GET /votes - should contain our vote with matching id and url', async function () {
        const res = await api.getVotes();
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('array').that.is.not.empty;

        const found = res.data.some(v =>
            v.image &&
            v.image.id === imageId &&
            v.image.url === imageUrl
        );

        expect(found, 'Voted image id/url should match the searched image').to.be.true;
    });

    after(async function () {
        if (favouriteId) {
            await api.deleteFavourite(favouriteId);
        }
    });

});

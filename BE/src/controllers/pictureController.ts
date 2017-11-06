import { Request, Response } from 'express';
import PictureRepository from '../repositories/pictureRepository';
import Picture from '../models/Picture';

export class PictureController {
    private pictureRepository: PictureRepository = new PictureRepository();

    public updatePicture = (req: Request, res: Response): void => {
        let picture: Picture = new Picture();
        picture.path = 'www.something.com';
        picture.order = 1;

        this.pictureRepository.updateItem(1, picture).then((response: any) => {
            res.send(response);
        });
    }

    public getAllPictures = (req: Request, res: Response): void => {
        console.log(this);
        this.pictureRepository.getAll().then((response: any) => {
            res.send(response);
        });
    }

    public getPicture = (req: Request, res: Response): void => {
        this.pictureRepository.getItemById(1).then((response: any) => {
            res.send(response);
        });
    }

    public deletePicture = (req: Request, res: Response): void => {
        this.pictureRepository.deleteItem(2).then((response: any) => {
            res.send(response);
        });
    }

    public insertPicture = (req: Request, res: Response): void => {
        let picture: Picture = new Picture();
        picture.path = 'www.something.com';
        picture.order = 1;

        this.pictureRepository.createItem(picture).then((response: any) => {
            res.send(response);
        });
    }
}

const pictureController: PictureController = new PictureController();

export default pictureController;

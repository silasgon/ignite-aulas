import { Category } from '../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class PostgressCategoriesRepository implements ICategoriesRepository{
    findByName(name: string): Category {
        console.log(name)
        return null;
        //throw new Error('Method not implemented.');
    }
    list(): Category[] {
        return null;
    }
    create({name, description}: ICreateCategoryDTO): void {
        console.log(name, description)
    }


}

export { PostgressCategoriesRepository }
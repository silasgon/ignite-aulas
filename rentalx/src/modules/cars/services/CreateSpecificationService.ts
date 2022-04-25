import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {

    }

    execute({ name, description }: IRequest): void{
        const specificationAlreadyExists = this.specificationsRepository.fyndByName(name);

        if(specificationAlreadyExists){
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        })
    }
}

export { CreateSpecificationService }
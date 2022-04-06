// A model must be a blueprint for the object we will create. 
// And Typescript will do this.
// A class can be instantiated so a new object can be created based on the setup provided in the class.  

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
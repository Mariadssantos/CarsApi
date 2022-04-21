// import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
// import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
// import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


// let listCategoriesUseCase: ListCategoriesUseCase;
// let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
// let createCategoryUseCase: CreateCategoryUseCase;

// describe("List all categories", () => {
//     beforeEach(() => {
//         categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
//         listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepositoryInMemory);
//         createCategoryUseCase: new CreateCategoryUseCase(categoriesRepositoryInMemory);
//     });

//     it("should be able to list all categories", async () => {
//         const category = {
//             name: "Name Test(list)",
//             description: "Description Test(list)",
//         };
//         await createCategoryUseCase.execute({ description: category.description, name: category.name });
        
//         const category2 = {
//             name: "Name Test2(list)",
//             description: "Description Test2(list)",
//         };
//         await createCategoryUseCase.execute({ description: category2.description, name: category2.name });

//         await listCategoriesUseCase.execute();
//         const list = await categoriesRepositoryInMemory.list();
//         console.log(list);
//         expect(list);
//     });
// });




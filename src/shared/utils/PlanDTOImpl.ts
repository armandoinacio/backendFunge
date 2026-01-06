export const PlanDTOImpl=(body:any):any=>{
   return { 
    plan:body.plan,
    price:body.price,
    description:body.description
}
}
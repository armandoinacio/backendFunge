export const SubDTOImpl=(body:any):any=>{
    return {
        subId:body.subId,
        userId:body.userId,
        planId:body.planId
    }
}
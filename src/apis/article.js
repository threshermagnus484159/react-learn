import { http } from '@/utils/request'

export function getChannelAPI(){
    return http({
        url:'/channels',
        method:'GET',
    })
}

export function createArticleAPI(data){
    return http({
        url:'/mp/articles?draft=false',
        method:'POST',
        data
    })
}

export function getArticleListAPI(params){
    return http({
        url:'/mp/articles',
        method:'GET',
        params
    })
}

export function deleteArticleAPI(id){
    return http({
        url:`/mp/articles/${id}`,
        method:'DELETE',
    })
}

export function getArticleByID(id){
    return http({
        url:`/mp/articles/${id}`,
        method:'GET',
    })
}

export function updateArticleAPI(data){
    return http({
        url:`/mp/articles/${data.id}?draft=false`,
        method:'PUT',
        data
    })
}
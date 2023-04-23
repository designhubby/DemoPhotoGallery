import { ImageList } from "../data/list";
import _ from 'lodash';

export function Searchlist(term){
    console.log('SEarching')
    console.log(term);
    const searchfields = [
        'id', 'author',
    ]

    const sortByField = 'author';
    const sortByDirection = 'asc';

    const runSearch = ()=>{
        let result = ImageList.filter(indivImage=>{
            return searchfields.some(indivSearchField=>{
                return indivImage[indivSearchField].toLowerCase().includes(term.toLowerCase());
            })
        });
        result = _.orderBy(result,sortByField,sortByDirection);
        result = result.slice(0,11);
        console.log(`result`)
        console.log(result);
        return result;
    }
    return(
        runSearch()
    );

}
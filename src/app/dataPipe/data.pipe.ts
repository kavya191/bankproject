import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  //transactionArray-transaction details
  //searchTerm=CREDIT,DEBIT,ALL
  //searchType-type
  transform(transactionArray: any[], searchTerm: string, searchType: string): any[] {
    //empty array to store output
    //here output is transaction array
    const result: any = []
    //pipe logic
    if (!transactionArray || !searchTerm ||!searchType) {
      return transactionArray
    }else {

      transactionArray.forEach(item => {
        //check searchTerm searchtypeil included aanoo check cheyyanam
        if (item[searchType].includes(searchTerm)) {
          //each filtered object store in item
          //store each object in result array
          result.push(item)
        }
      })
      //return filterted  output array
      return result
    }
}

}

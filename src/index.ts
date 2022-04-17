export class Pagination {
    result:string = ''
    resultArray:string[] = []
    currentPage:number = 0
    totalPages:number = 0
    arrayVissible:string[] = []
    INITIAL_ITEMS:string[] = ['1', '...']
    THREE_DOST:string = '...'

    constructor(_currentPage:number, _totalPages:number){
      this.currentPage = _currentPage
      this.totalPages = _totalPages
      this.main()
    }

    calculateArrayWhenSevenOrLessPages(){
      for (let i:number = 1; i <= this.totalPages; i++){
        if (i === this.currentPage) this.resultArray.push('(' + i.toString() + ')')
        else this.resultArray.push(i.toString())
      }
    }

    calculateArrayWhenItsMoreThanSevenPages(){
      this.resultArray = [
        ...this.resultArray, ...this.INITIAL_ITEMS,
        (this.currentPage - 1).toString(), `(${this.currentPage})`,
        (this.currentPage + 1).toString(), this.THREE_DOST, this.totalPages.toString()]
    }

    main(){
      if (this.totalPages <= 7) this.calculateArrayWhenSevenOrLessPages()
      else this.calculateArrayWhenItsMoreThanSevenPages()

      //console.log('resultArray: ' + this.resultArray)
      let kko:string = this.resultArray.toString()
      this.result = kko.split(',').join(' ')
      //this.result = this.result.substring(1)
      console.log('result: ' + this.result)
    }

};
  
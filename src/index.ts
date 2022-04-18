export class Pagination {
    result:string = ''
    resultArray:string[] = []
    currentPage:number = 0
    totalPages:number = 0
    arrayVissible:string[] = []
    INITIAL_ITEMS:string[] = ['1', '...']
    THREE_DOTS:string = '...'

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
      if (this.currentPage === 5)
      {
        this.resultArray = [...this.INITIAL_ITEMS]
        for (let i:number = 4; i <= 6; i++)
        {
          if (i === this.currentPage) this.resultArray.push(`(${i})`)
          else this.resultArray.push(i.toString())
        }
        this.resultArray = [...this.resultArray, this.THREE_DOTS, this.totalPages.toString()]
        return
      }
      if (this.currentPage < 5)
      {
        for (let i:number = 1; i <= 5; i++)
        {
          if (i === this.currentPage) this.resultArray.push(`(${i})`) 
          else this.resultArray.push(i.toString())
        }
        this.resultArray = [...this.resultArray, this.THREE_DOTS, this.totalPages.toString()]
        return
      }

      if (this.currentPage === this.totalPages)
      {
        for (let i:number = 1; i <= 5; i++)
        {
          this.resultArray.push(i.toString())
        }
        this.resultArray = [...this.resultArray, this.THREE_DOTS, `(${this.totalPages})`]
        return
      }

      if (this.currentPage >= this.totalPages - 5)
      {
        this.resultArray = [...this.INITIAL_ITEMS]
        for (let i:number = this.totalPages - (5 - 1); i <= this.totalPages; i++)
        {
          if (i === this.currentPage) this.resultArray.push(`(${i})`)
          else this.resultArray.push(i.toString())
        }
        return
      }

      this.resultArray = [
                          ...this.INITIAL_ITEMS,
                          (this.currentPage - 1).toString(), `(${this.currentPage})`,
                          (this.currentPage + 1).toString(), this.THREE_DOTS, this.totalPages.toString()]
      }

    main(){
      if (this.totalPages <= 7) this.calculateArrayWhenSevenOrLessPages()
      else this.calculateArrayWhenItsMoreThanSevenPages()

      this.result = this.resultArray.join(' ')
      console.log('result: ' + this.result)
    }
};
  
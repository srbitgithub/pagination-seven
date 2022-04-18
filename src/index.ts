export class Pagination {
    result:string = ''
    resultArray:string[] = []
    currentPage:number = 0
    totalPages:number = 0
    PAGINATION:number = 7
    VISIBLE_CONSECUTIVE_ELEMENTS:number = this.PAGINATION - 2
    INITIAL_ITEMS:string[] = ['1', '...']
    THREE_DOTS:string = '...'


    constructor(_currentPage:number, _totalPages:number){
      this.currentPage = _currentPage
      this.totalPages = _totalPages
      this.main()
    }

    addContinuesElementsToResulArray(from:number, to:number){
      for (let i:number = from; i <= to; i++)
      {
        if (i === this.currentPage) this.resultArray.push(`(${i})`)
        else this.resultArray.push(i.toString())
      }
    }

    calculateArrayWhenSevenOrLessPages(){
      this.addContinuesElementsToResulArray(1, this.totalPages)
    }

    calculateArrayWhenItsMoreThanSevenPages(){
      if (this.currentPage === 5)
      {
        this.resultArray = [...this.INITIAL_ITEMS]
        this.addContinuesElementsToResulArray(4, 6)
        this.resultArray = [...this.resultArray, this.THREE_DOTS, this.totalPages.toString()]
        return
      }
      if (this.currentPage < 5)
      {
        this.addContinuesElementsToResulArray(1, 5)
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
        this.addContinuesElementsToResulArray(this.totalPages - (5 - 1), this.totalPages)
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
    }
};
  
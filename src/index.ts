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

    addContinuesElementsToResulArray(from:number, to:number, addWithCurrentPage:boolean = true){
      for (let i:number = from; i <= to; i++)
      {
        if (i === this.currentPage && addWithCurrentPage) this.resultArray.push(`(${i})`)
        else this.resultArray.push(i.toString())
      }
    }

    calculateArrayWhenSevenOrLessPages(){
      this.addContinuesElementsToResulArray(1, this.totalPages)
    }

    calculateArrayWhenItsMoreThanSevenPages(){
      if (this.currentPage === this.VISIBLE_CONSECUTIVE_ELEMENTS)
      {
        this.resultArray = [...this.INITIAL_ITEMS]
        this.addContinuesElementsToResulArray(this.VISIBLE_CONSECUTIVE_ELEMENTS - 1, this.VISIBLE_CONSECUTIVE_ELEMENTS + 1)
        this.resultArray = [...this.resultArray, this.THREE_DOTS, this.totalPages.toString()]
        return
      }

      if (this.currentPage < this.VISIBLE_CONSECUTIVE_ELEMENTS)
      {
        this.addContinuesElementsToResulArray(1, this.VISIBLE_CONSECUTIVE_ELEMENTS)
        this.resultArray = [...this.resultArray, this.THREE_DOTS, this.totalPages.toString()]
        return
      }

      if (this.currentPage === this.totalPages)
      {
        this.addContinuesElementsToResulArray(1, this.VISIBLE_CONSECUTIVE_ELEMENTS, false)
        this.resultArray = [...this.resultArray, this.THREE_DOTS, `(${this.totalPages})`]
        return
      }

      if (this.currentPage >= this.totalPages - this.VISIBLE_CONSECUTIVE_ELEMENTS)
      {
        this.resultArray = [...this.INITIAL_ITEMS]
        this.addContinuesElementsToResulArray(this.totalPages - (this.VISIBLE_CONSECUTIVE_ELEMENTS - 1), this.totalPages)
        return
      }

      this.resultArray = [
                          ...this.INITIAL_ITEMS,
                          (this.currentPage - 1).toString(), `(${this.currentPage})`,
                          (this.currentPage + 1).toString(), this.THREE_DOTS, this.totalPages.toString()]
      }

    main(){
      if (this.totalPages <= this.PAGINATION) this.calculateArrayWhenSevenOrLessPages()
      else this.calculateArrayWhenItsMoreThanSevenPages()
      this.result = this.resultArray.join(' ')
    }
}
  
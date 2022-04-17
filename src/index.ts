export class Pagination {
    result:string = ''
    currentPage:number = 0
    totalPages:number = 0

    constructor(_currentPage:number, _totalPages:number){
      this.currentPage = _currentPage
      this.totalPages = _totalPages
      this.main()
    }

    main(){
      for (let i:number = 1; i <= this.totalPages; i++){
        if (i === this.currentPage) this.result = this.result + " (" + i + ")"
        else this.result = this.result + " " + i
      }
      this.result = this.result.substring(1)
      console.log('result: ' + this.result)
    }

};
  
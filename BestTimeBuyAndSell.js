{/*

    LEETCODE : 121 Best Time To Buy And Sell Stock
    
    You are given an array prices where prices[i] is the price of a given
    stock on ith day

    You want to maximize your profit by choosing a single day to buy one stock
    and choosing a diffirent day in the future to sell that stock

    Return the maximum profit you can achieve from this transaction. If you 
    can not achieve any profit return 0

    Example : 1 
        Input : prices = [7,1,5,3,6,4]
        Output : 5
    
    Example : 2 
        Input : prices = [7,6,4,3,1]
        Output : 3
    
*/}

const handleTimeBuyAndSell = (prices) =>{
        let minPrice = Math.min(...prices); 
        let minimum = prices.indexOf(minPrice)
        let daysell = Math.max(...prices.slice(minimum))
        let result = (daysell - minPrice>0) ? daysell-minPrice : 0

        return result
}

console.log(handleTimeBuyAndSell([7,1,5,3,6,4]))
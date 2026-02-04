function maxProfit(prices: number[]): number {
    let mn = prices[0], mxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < mn){
            mn = prices[i];
        }
        mxProfit = Math.max(mxProfit, prices[i] - mn);
    }
    return mxProfit;
};
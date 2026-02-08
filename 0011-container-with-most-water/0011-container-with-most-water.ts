function maxArea(height: number[]): number {
    let l = 0 , r = height.length - 1, mxArea = 0;
    while (l < r){
        let width = r - l;
        let currHeight = Math.min(height[l] , height[r]);
        let currArea = width * currHeight;
        mxArea = Math.max(mxArea , currArea);
        if(height[l] < height[r]){
            l++;
        }else r--;
    }
    return mxArea;
};
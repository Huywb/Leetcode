{/*

    LEETCODE: 1266 Minimum Time Visiting All Points

    On a 2D plane, there are n points with integer coordinates points[i] = [x1,y1]
    Return the minimum time in seconds to visit all the points in the order
    given by points

    Example 1 : 
        Input : points = [[1,1],[3,4],[-1,0]]
        Output: 7

    Example 2 : 
        Input : points = [[3,2],[-2,2]]
        Output: 5

*/}


const handleMinimumTimeVisiting = (points) =>{
    let result = 0

    for(let i = 1; i< points.length;i++){
        const [x1, y1] = points[i - 1];
        const [x2, y2] = points[i];


        console.log('dsad',x1)
        console.log('aaa',x2)
        result += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));

        
    }


    return result

}


console.log(handleMinimumTimeVisiting([[1,1],[3,4],[-1,0]]))
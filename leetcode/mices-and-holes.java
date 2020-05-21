/* There are N Mice and N holes that are placed in a straight line. Each hole can accomodate only 1 mouse. The positions of Mice are denoted by array A and the position of holes are denoted by array B. A mouse can stay at his position, move one step right from x to x + 1, or move one step left from x to x − 1. Any of these moves consumes 1 minute. Assign mice to holes so that the time when the last mouse gets inside a hole is minimized.  
*/

public class Solution {
    public int mice(int[] A, int[] B) {
        Arrays.sort(A);
        Arrays.sort(B);
        int maximum = Integer.MIN_VALUE;
        for(int i=0; i < A.length; i++){
            int timeTaken = Math.abs(A[i] - B[i]);
            if(timeTaken > maximum){
                maximum = timeTaken;
            }
        }
        return maximum;
    }
}
//sorting both mices and holes with get all the mices to the nearest holes
//each mice is assigned according to the order
//time taken for a mice to reach hole is calculated and compared with the maximum
//return the maximum
//space complexity - O(1)
//time complexity - 
//tight bound = 2 * O(N long N) + O(N)
//loose bound = O(N)
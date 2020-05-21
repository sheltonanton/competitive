/*
There are N children standing in a line. Each child is assigned a rating value. You are giving candies to these children subjected to the following requirements: 
Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
 What is the minimum candies you must give?   
 */

public class Solution {
    public int candy(int[] A) {
        int[] candies = new int[A.length];
        //from first to last checking whether the previous candies count with current is greater for rating greater than previous
        for(int i=0; i < A.length; i++){
            if(i==0){
                candies[i] = 1;
            }else{
                int prev = A[i-1];
                int cur = A[i];
                if(cur > prev){
                    candies[i] = candies[i-1] + 1;
                }else{
                    candies[i] = 1;
                }
            }
        }
        int min = candies[A.length - 1];
        //from last to first checking whether the previous candies count with current is greater for rating greater than previous
        for(int i=A.length - 2; i >= 0; i--){
            int prev = A[i+1];
            int cur = A[i];
            if(cur > prev && candies[i] <= candies[i+1]){
                candies[i] = candies[i+1] + 1;
            }
            min = min + candies[i];
        }
        // this.printArray(candies);
        return min;
    }
    
    public void printArray(int[] candies){
        for(Integer t: candies){
            System.out.print(t + " ");
        }
        System.out.println();
    }
}
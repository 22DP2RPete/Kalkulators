package rvt;

public class MainProgram {

    public static int smallest(int[] intArr){
        int smallest = intArr[0];
        for (int i = 0; i < intArr.length; i++) {
            if (intArr[i] < smallest) {
                smallest = intArr[i];
            }
        }
        return smallest;

    }

    public static int indexOfSmallest(int[] array) {
        int index = 0;
        int smallest = array[0];
        for (int i = 0; i < array.length; i++) {
            if (array[i] < smallest) {
                smallest = array[i];
                index = i;
            }
        }
        return index;
    }
    public static int indexOfSmallestFrom(int[] table, int startIndex) {
        int index = startIndex;
        int smallest = table[startIndex];
        for (int i = startIndex; i < table.length; i++) {
            if (table[i] < smallest) {
                smallest = table[i];
                index = i;
            }
        }
        return index;
    }
    public static void swap(int[] array, int index1, int index2) {
        int temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    
    public static int[] sort(int[] array) {
        for (int i = 0; i < array.length; i++) {
            int IndexOfSmallestFrom = indexOfSmallestFrom(array, 1);
            swap(array, i, IndexOfSmallestFrom);
        }
        return array;
    }
    
    public static int binarySearch(int[] array, int searchedValue) {
        // assuming the variable searched exits
        // assuming the variable list exits
        int StartIndex = 0;
        int endIndex = array.length - 1;

        while (StartIndex <= endIndex) {
            int middleIndex = (StartIndex + endIndex) / 2;  
            if (searchedValue == array[middleIndex]) {
                return searchedValue;
            }
            if (searchedValue > array[middleIndex]) {
                StartIndex = middleIndex + 1;
            }
            if (searchedValue < array[middleIndex]) {
                endIndex = middleIndex - 1;
            }

        }
        return -1;




        // if the value at list[middle] is smaller than searched
        //     begin = middle + 1

        // if the value at list[middle] is larger than searched;
        //     end = middle - 1;

        //     return value -1;
    }
}
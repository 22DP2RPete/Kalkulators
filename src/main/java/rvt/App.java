package rvt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.lang.reflect.Array;
import java.util.*;

@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
        
        int[] numbers = {8, 3, 7, 9, 1, 2, 4};
        System.out.println(MainProgram.binarySearch(numbers, 9));
    


    }
    public static void smallestAndindexOfSmallest(int[] numbers) {
        System.out.println("Smallest: " + MainProgram.smallest(numbers));
        System.out.println("Index of smallest number: " + MainProgram.indexOfSmallest(numbers));
    }
    public static void IndexOfSmallestFrom(int[] numbers) {
        System.out.println("Smallest index of: " + MainProgram.indexOfSmallestFrom(numbers, 0));
        System.out.println("Smallest index of: " + MainProgram.indexOfSmallestFrom(numbers, 1));
        System.out.println("Smallest index of: " + MainProgram.indexOfSmallestFrom(numbers, 2));
    }
    public static void swapFunkcija(int[] numbers) {
        System.out.println(Arrays.toString(numbers));

        MainProgram.swap(numbers, 1, 0);
        System.out.println(Arrays.toString(numbers));

        MainProgram.swap(numbers, 0, 3);
        System.out.println(Arrays.toString(numbers));
    }
}
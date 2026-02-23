package _01_introduction._03_controlStatements._02_looping;

public class Demo21 {
    public static void main(String[] args) {
        //*
        //**
        //***
        //****
        //*****

        for (int row = 1; row <= 5; row++) {
            for (int column = 1; column <= row; column++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
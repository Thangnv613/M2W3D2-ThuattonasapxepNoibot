export class BubbleSort {
    public static bubbleSort(list: number[]): number[] {
        for (let k = 1; k < list.length - 1; k++) {
            for (let i = 0; i < list.length - k - 1; i++) {
                if (list[i] > list[i + 1]) {
                    let temp: number = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                }
            }
        }
        return list;
    }
}
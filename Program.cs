using System.Text.Json;

class Program {
    const int MaxNumber = 200;
    const string FilePath = "./numbers.json";
    static void Main(){
        List<int> numbers = ReadJson();
        int randomNumber = GenerateRandomNumber();
        numbers.Add(randomNumber);
        WriteToJson(numbers);
        Console.WriteLine(randomNumber);
    }
    static void WriteToJson(List<int> data){
        string json = JsonSerializer.Serialize(data);
        File.WriteAllText(FilePath, json);
    }
    static List<int> ReadJson() {
        if(!File.Exists(FilePath)) return [];
        return JsonSerializer.Deserialize<List<int>>(File.ReadAllText(FilePath)) ?? [];
    }

    static int GenerateRandomNumber() {
        Random rnd = new Random();
        return rnd.Next(1, MaxNumber);
    }

}
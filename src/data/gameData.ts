export interface CodeOption {
  label: string;
  isCorrect: boolean;
}

export interface GameLevel {
  question: string;
  options: CodeOption[];
}

export const gameLevels: GameLevel[] = [
  {
    "question": "Python Code Snippet #1",
    "options": [
      {
        "label": "for i in range(5): print(i)",
        "isCorrect": true
      },
      {
        "label": "for i range(5): print(i)",
        "isCorrect": false
      },
      {
        "label": "for i in range(5) print(i)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Python Code Snippet #2",
    "options": [
      {
        "label": "print('Hello, world!')",
        "isCorrect": true
      },
      {
        "label": "prnt('Hello, world!')",
        "isCorrect": false
      },
      {
        "label": "print'Hello, world!'",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Python Code Snippet #3",
    "options": [
      {
        "label": "x = 10\ny = 5\nprint(x + y)",
        "isCorrect": true
      },
      {
        "label": "x == 10\ny == 5\nprint(x + y)",
        "isCorrect": false
      },
      {
        "label": "x = 10 y = 5 print(x + y)",
        "isCorrect": false
      }
    ]
  },

  {
    "question": "Python Code Snippet #4",
    "options": [
      { "label": "def my_function():\n  pass", "isCorrect": true },
      { "label": "def my_function:\n  pass", "isCorrect": false },
      { "label": "function my_function():\n  pass", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #5",
    "options": [
      { "label": "my_list = [1, 2, 3]\nprint(my_list[0])", "isCorrect": true },
      { "label": "my_list = [1, 2, 3]\nprint(my_list(0))", "isCorrect": false },
      { "label": "my_list = [1, 2, 3]\nprint(my_list.get(0))", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #6",
    "options": [
      { "label": "if x > 5:\n  print('Greater')", "isCorrect": true },
      { "label": "if (x > 5)\n  print('Greater')", "isCorrect": false },
      { "label": "if x > 5 then:\n  print('Greater')", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #7",
    "options": [
      { "label": "a = 'Hello'\nb = 'World'\nprint(a + ' ' + b)", "isCorrect": true },
      { "label": "a = 'Hello'\nb = 'World'\nprint(a.concat(' ', b))", "isCorrect": false },
      { "label": "a = 'Hello'\nb = 'World'\nprint(a & ' ' & b)", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #8",
    "options": [
      { "label": "fruits = ['apple', 'banana']\nprint(len(fruits))", "isCorrect": true },
      { "label": "fruits = ['apple', 'banana']\nprint(fruits.length())", "isCorrect": false },
      { "label": "fruits = ['apple', 'banana']\nprint(size(fruits))", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #9",
    "options": [
      { "label": "my_dict = {'key': 'value'}\nprint(my_dict['key'])", "isCorrect": true },
      { "label": "my_dict = {'key': 'value'}\nprint(my_dict.key)", "isCorrect": false },
      { "label": "my_dict = {'key': 'value'}\nprint(my_dict('key'))", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #10",
    "options": [
      { "label": "i = 0\nwhile i < 3:\n  print(i)\n  i += 1", "isCorrect": true },
      { "label": "i = 0\nwhile i < 3\n  print(i)\n  i += 1", "isCorrect": false },
      { "label": "i = 0\nwhile (i < 3) {\n  print(i)\n  i++\n}", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #11",
    "options": [
      { "label": "import math\nprint(math.sqrt(16))", "isCorrect": true },
      { "label": "import math\nprint(sqrt(16))", "isCorrect": false },
      { "label": "include math\nprint(math.sqrt(16))", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #12",
    "options": [
      { "label": "class Dog:\n  pass\nd = Dog()", "isCorrect": true },
      { "label": "class Dog:\n  pass\nd = new Dog()", "isCorrect": false },
      { "label": "class Dog()\n  pass\nd = Dog()", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #13",
    "options": [
      { "label": "user_input = input('Enter name: ')", "isCorrect": true },
      { "label": "user_input = input 'Enter name: '", "isCorrect": false },
      { "label": "user_input = raw_input('Enter name: ')", "isCorrect": false }
    ]
  },
  // --- Medium Difficulty ---
  {
    "question": "Python Code Snippet #14",
    "options": [
      { "label": "numbers = [1, 2, 3]\nsquares = [n**2 for n in numbers]", "isCorrect": true },
      { "label": "numbers = [1, 2, 3]\nsquares = (n**2 for n in numbers)", "isCorrect": false },
      { "label": "numbers = [1, 2, 3]\nsquares = [for n in numbers: n**2]", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #15",
    "options": [
      { "label": "add = lambda x, y: x + y", "isCorrect": true },
      { "label": "lambda add(x, y): x + y", "isCorrect": false },
      { "label": "add = lambda x, y -> x + y", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #16",
    "options": [
      { "label": "my_list = [0, 1, 2, 3, 4]\nprint(my_list[1:3])", "isCorrect": true },
      { "label": "my_list = [0, 1, 2, 3, 4]\nprint(my_list[1,3])", "isCorrect": false },
      { "label": "my_list = [0, 1, 2, 3, 4]\nprint(my_list.slice(1,3))", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #17",
    "options": [
      { "label": "try:\n  x = 1 / 0\nexcept ZeroDivisionError:\n  print('Error')", "isCorrect": true },
      { "label": "try:\n  x = 1 / 0\ncatch ZeroDivisionError:\n  print('Error')", "isCorrect": false },
      { "label": "try {\n  x = 1 / 0\n} except ZeroDivisionError {\n  print('Error')\n}", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #18",
    "options": [
      { "label": "my_set = {1, 2, 3, 3}\nprint(len(my_set))", "isCorrect": true },
      { "label": "my_set = set(1, 2, 3, 3)\nprint(len(my_set))", "isCorrect": false },
      { "label": "my_set = {1, 2, 3, 3}\nprint(my_set.size())", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #19",
    "options": [
      { "label": "name = 'World'\nprint(f'Hello, {name}!')", "isCorrect": true },
      { "label": "name = 'World'\nprint('Hello, {name}!')", "isCorrect": false },
      { "label": "name = 'World'\nprint(f'Hello, {name}')", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #20",
    "options": [
      { "label": "coordinates = (10, 20)\nx, y = coordinates", "isCorrect": true },
      { "label": "coordinates = (10, 20)\n(x, y) = coordinates", "isCorrect": false },
      { "label": "coordinates = (10, 20)\nlet {x, y} = coordinates", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #21",
    "options": [
      { "label": "print('a' in 'banana')", "isCorrect": true },
      { "label": "print('banana'.contains('a'))", "isCorrect": false },
      { "label": "print(includes('a', 'banana'))", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #22",
    "options": [
      { "label": "def greet(name='Guest'):\n  print(f'Hi, {name}')", "isCorrect": true },
      { "label": "def greet(name: 'Guest'):\n  print(f'Hi, {name}')", "isCorrect": false },
      { "label": "def greet(string name='Guest'):\n  print(f'Hi, {name}')", "isCorrect": false }
    ]
  },
  {
    "question": "Python Code Snippet #23",
    "options": [
      { "label": "with open('file.txt', 'w') as f:\n  f.write('hello')", "isCorrect": true },
      { "label": "f = open('file.txt', 'w')\nf.write('hello')\nf.close()", "isCorrect": false },
      { "label": "open('file.txt', 'w') as f:\n  f.write('hello')", "isCorrect": false }
    ]
  },

  {
    "question": "C Code Snippet #1",
    "options": [
      {
        "label": "int a = 5, b = 10;\nprintf(\"%d\", a + b);",
        "isCorrect": true
      },
      {
        "label": "int a = 5, b = 10; printf(\"%d\" a + b);",
        "isCorrect": false
      },
      {
        "label": "int a = 5 b = 10;\nprintf(\"%d\", a + b);",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "C Code Snippet #2",
    "options": [
      {
        "label": "#include <stdio.h>\nint main() { printf(\"Hello, world!\\n\"); return 0; }",
        "isCorrect": true
      },
      {
        "label": "#include <stdio.h>\nint main() { prinf(\"Hello, world!\\n\"); return 0; }",
        "isCorrect": false
      },
      {
        "label": "#include <stdio.h>\nint main() printf(\"Hello, world!\\n\"); return 0; }",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "C Code Snippet #3",
    "options": [
      {
        "label": "for(int i = 0; i < 10; i++) printf(\"%d\\n\", i);",
        "isCorrect": true
      },
      {
        "label": "for(int i = 0 i < 10; i++) printf(\"%d\\n\", i);",
        "isCorrect": false
      },
      {
        "label": "for int i = 0; i < 10; i++ printf(\"%d\\n\", i);",
        "isCorrect": false
      }
    ]
  },

  {
    "question": "C Code Snippet #4",
    "options": [
      { "label": "int num = 10;", "isCorrect": true },
      { "label": "int num = 10", "isCorrect": false },
      { "label": "let num = 10;", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #5",
    "options": [
      { "label": "if (x == 5) {\n  printf(\"Equal\");\n}", "isCorrect": true },
      { "label": "if (x = 5) {\n  printf(\"Equal\");\n}", "isCorrect": false },
      { "label": "if x == 5 {\n  printf(\"Equal\");\n}", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #6",
    "options": [
      { "label": "int i = 0;\nwhile (i < 5) {\n  i++;\n}", "isCorrect": true },
      { "label": "int i = 0;\nwhile i < 5 {\n  i++;\n}", "isCorrect": false },
      { "label": "int i = 0;\nwhile (i < 5);\n  i++;", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #7",
    "options": [
      { "label": "int *ptr;", "isCorrect": true },
      { "label": "int ptr*;", "isCorrect": false },
      { "label": "pointer int ptr;", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #8",
    "options": [
      { "label": "int x = 10;\nint *p = &x;\nprintf(\"%d\", *p);", "isCorrect": true },
      { "label": "int x = 10;\nint *p = &x;\nprintf(\"%d\", p);", "isCorrect": false },
      { "label": "int x = 10;\nint *p = x;\nprintf(\"%d\", *p);", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #9",
    "options": [
      { "label": "int add(int a, int b);\n", "isCorrect": true },
      { "label": "int add(int a, int b)\n", "isCorrect": false },
      { "label": "function int add(int a, int b);", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #10",
    "options": [
      { "label": "int numbers[5];", "isCorrect": true },
      { "label": "int numbers(5);", "isCorrect": false },
      { "label": "array<int> numbers[5];", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #11",
    "options": [
      { "label": "int age;\nscanf(\"%d\", &age);", "isCorrect": true },
      { "label": "int age;\nscanf(\"%d\", age);", "isCorrect": false },
      { "label": "int age;\nscanf(\"%i\", age);", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #12",
    "options": [
      { "label": "const float PI = 3.14;", "isCorrect": true },
      { "label": "final float PI = 3.14;", "isCorrect": false },
      { "label": "float const PI = 3.14", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #13",
    "options": [
      { "label": "char grade = 'A';", "isCorrect": true },
      { "label": "char grade = \"A\";", "isCorrect": false },
      { "label": "string grade = 'A';", "isCorrect": false }
    ]
  },
  // --- Medium Difficulty ---
  {
    "question": "C Code Snippet #14",
    "options": [
      { "label": "struct Point {\n  int x;\n  int y;\n};", "isCorrect": true },
      { "label": "struct Point {\n  int x,\n  int y\n}", "isCorrect": false },
      { "label": "class Point {\n  int x;\n  int y;\n};", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #15",
    "options": [
      { "label": "int* arr = (int*)malloc(10 * sizeof(int));", "isCorrect": true },
      { "label": "int* arr = malloc(10 * int);", "isCorrect": false },
      { "label": "int* arr = (int*)alloc(10 * sizeof(int));", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #16",
    "options": [
      { "label": "struct Point p1;\np1.x = 10;", "isCorrect": true },
      { "label": "struct Point p1;\np1->x = 10;", "isCorrect": false },
      { "label": "struct Point p1;\nPoint.x = 10;", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #17",
    "options": [
      { "label": "struct Point *p2;\np2->y = 20;", "isCorrect": true },
      { "label": "struct Point *p2;\n(*p2).y = 20;", "isCorrect": false },
      { "label": "struct Point *p2;\np2.y = 20;", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #18",
    "options": [
      { "label": "enum Status { ACTIVE, INACTIVE };", "isCorrect": true },
      { "label": "enum Status [ ACTIVE, INACTIVE ];", "isCorrect": false },
      { "label": "enum Status { ACTIVE, INACTIVE }", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #19",
    "options": [
      { "label": "void (*pFunc)(int);", "isCorrect": true },
      { "label": "void* pFunc(int);", "isCorrect": false },
      { "label": "void (*pFunc)[int];", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #20",
    "options": [
      { "label": "#define MAX_SIZE 100", "isCorrect": true },
      { "label": "#define MAX_SIZE 100;", "isCorrect": false },
      { "label": "#DEFINE MAX_SIZE 100", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #21",
    "options": [
      { "label": "int result = 5 & 3; // bitwise AND", "isCorrect": true },
      { "label": "int result = 5 && 3; // logical AND", "isCorrect": false },
      { "label": "int result = 5 and 3;", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #22",
    "options": [
      { "label": "int max = (a > b) ? a : b;", "isCorrect": true },
      { "label": "int max = (a > b) then a else b;", "isCorrect": false },
      { "label": "int max = if (a > b) a else b;", "isCorrect": false }
    ]
  },
  {
    "question": "C Code Snippet #23",
    "options": [
      { "label": "#include <string.h>\nstrcpy(dest, src);", "isCorrect": true },
      { "label": "#include <string.h>\ndest = src;", "isCorrect": false },
      { "label": "#include <string.h>\nstring_copy(dest, src);", "isCorrect": false }
    ]
  },

  {
    "question": "Java Code Snippet #1",
    "options": [
      {
        "label": "public class Main { public static void main(String[] args) { System.out.println(\"Hello, world!\"); } }",
        "isCorrect": true
      },
      {
        "label": "public class Main { public static void main(String[] args) System.out.println(\"Hello, world!\"); } }",
        "isCorrect": false
      },
      {
        "label": "public class Main { public static void main(String[] args) { System.out.println(\"Hello, world!\") } }",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Java Code Snippet #2",
    "options": [
      {
        "label": "int x = 10;\nint y = 20;\nSystem.out.println(x + y);",
        "isCorrect": true
      },
      {
        "label": "int x = 10 int y = 20;\nSystem.out.println(x + y);",
        "isCorrect": false
      },
      {
        "label": "int x = 10;\nint y = 20\nSystem.out.println(x + y);",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Java Code Snippet #3",
    "options": [
      {
        "label": "for(int i = 0; i < 5; i++) { System.out.println(i); }",
        "isCorrect": true
      },
      {
        "label": "for(int i = 0 i < 5; i++) { System.out.println(i); }",
        "isCorrect": false
      },
      {
        "label": "for(int i = 0; i < 5; i++) System.out.println(i); ",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Java Code Snippet #4",
    "options": [
      { "label": "String name = \"Java\";", "isCorrect": true },
      { "label": "string name = \"Java\";", "isCorrect": false },
      { "label": "String name = new String(\"Java\");", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #5",
    "options": [
      { "label": "if (x < 10) {\n  // do something\n}", "isCorrect": true },
      { "label": "if x < 10 {\n  // do something\n}", "isCorrect": false },
      { "label": "if (x < 10)\n  // do something", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #6",
    "options": [
      { "label": "int[] nums = {1, 2, 3};", "isCorrect": true },
      { "label": "int[] nums = [1, 2, 3];", "isCorrect": false },
      { "label": "int nums[] = new int[3]{1,2,3};", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #7",
    "options": [
      { "label": "String s = \"hello\";\nint len = s.length();", "isCorrect": true },
      { "label": "String s = \"hello\";\nint len = s.length;", "isCorrect": false },
      { "label": "String s = \"hello\";\nint len = length(s);", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #8",
    "options": [
      { "label": "public void printMessage() {\n  // ...\n}", "isCorrect": true },
      { "label": "void public printMessage() {\n  // ...\n}", "isCorrect": false },
      { "label": "public void printMessage {\n  // ...\n}", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #9",
    "options": [
      { "label": "String s1 = \"a\";\nString s2 = \"a\";\ns1.equals(s2);", "isCorrect": true },
      { "label": "String s1 = \"a\";\nString s2 = \"a\";\ns1 == s2;", "isCorrect": false },
      { "label": "String s1 = \"a\";\nString s2 = \"a\";\nequals(s1, s2);", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #10",
    "options": [
      { "label": "Scanner sc = new Scanner(System.in);", "isCorrect": true },
      { "label": "Scanner sc = new Scanner();", "isCorrect": false },
      { "label": "new Scanner(System.in) = sc;", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #11",
    "options": [
      { "label": "ArrayList<String> names = new ArrayList<>();", "isCorrect": true },
      { "label": "ArrayList<String> names = new ArrayList();", "isCorrect": false },
      { "label": "ArrayList names<String> = new ArrayList<>();", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #12",
    "options": [
      { "label": "myList.get(0);", "isCorrect": true },
      { "label": "myList[0];", "isCorrect": false },
      { "label": "myList.item(0);", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #13",
    "options": [
      { "label": "myList.add(\"Apple\");", "isCorrect": true },
      { "label": "myList.push(\"Apple\");", "isCorrect": false },
      { "label": "myList.append(\"Apple\");", "isCorrect": false }
    ]
  },
  // --- Medium Difficulty ---
  {
    "question": "Java Code Snippet #14",
    "options": [
      { "label": "Map<String, Integer> map = new HashMap<>();", "isCorrect": true },
      { "label": "HashMap<String, Integer> map = new Map<>();", "isCorrect": false },
      { "label": "Map<String, Integer> map = new Map<String, Integer>();", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #15",
    "options": [
      { "label": "map.put(\"key\", 10);", "isCorrect": true },
      { "label": "map.add(\"key\", 10);", "isCorrect": false },
      { "label": "map[\"key\"] = 10;", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #16",
    "options": [
      { "label": "try { /* code */ } catch (Exception e) { }", "isCorrect": true },
      { "label": "try { /* code */ } except (Exception e) { }", "isCorrect": false },
      { "label": "try { /* code */ } catch Exception e { }", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #17",
    "options": [
      { "label": "for (String name : namesList) { }", "isCorrect": true },
      { "label": "for (String name in namesList) { }", "isCorrect": false },
      { "label": "for (name : namesList) { }", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #18",
    "options": [
      { "label": "public class Cat extends Animal { }", "isCorrect": true },
      { "label": "public class Cat implements Animal { }", "isCorrect": false },
      { "label": "public class Cat inherits Animal { }", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #19",
    "options": [
      { "label": "public class Car implements Drivable { }", "isCorrect": true },
      { "label": "public class Car extends Drivable { }", "isCorrect": false },
      { "label": "public class Car uses Drivable { }", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #20",
    "options": [
      { "label": "public static final double PI = 3.14;", "isCorrect": true },
      { "label": "final public static double PI = 3.14;", "isCorrect": false },
      { "label": "public const double PI = 3.14;", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #21",
    "options": [
      { "label": "Animal a = new Dog();\nDog d = (Dog) a;", "isCorrect": true },
      { "label": "Animal a = new Dog();\nDog d = a as Dog;", "isCorrect": false },
      { "label": "Animal a = new Dog();\nDog d = <Dog> a;", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #22",
    "options": [
      { "label": "list.stream().filter(s -> s.length() > 5);", "isCorrect": true },
      { "label": "list.filter(s -> s.length() > 5);", "isCorrect": false },
      { "label": "stream(list).filter(s -> s.length() > 5);", "isCorrect": false }
    ]
  },
  {
    "question": "Java Code Snippet #23",
    "options": [
      { "label": "public MyClass(String name) {\n  this.name = name;\n}", "isCorrect": true },
      { "label": "public MyClass(String name) {\n  name = name;\n}", "isCorrect": false },
      { "label": "constructor MyClass(String name) {\n  this.name = name;\n}", "isCorrect": false }
    ]
  }
];

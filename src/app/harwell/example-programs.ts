import { ProgramDescription } from "./program-description";

export class ExamplePrograms {
    static get programList(): ProgramDescription[] {
        return [
            new ProgramDescription("1", "Example program 1", `
[1]
20900
21000
22000
23000
24000
25000
10110
+10000000
10120
+01000000
10130
+15500000
03202
02102

==tape
[2]
11040
51040
07300
11001
07400
10901
12010
13040
31040
01140
24000
20900
05202
05202
00100`),
            new ProgramDescription("2", "Example program 2", `
[1]
20900
21000
22000
23000
24000
25000
10110
+05000000
10120
+90000000
10130
+10000000
10140
+20000000
11050
03202
02102

==tape
[2]
07400
11001
33020
01220
05303
02203
25009
64050
20900
15010
03202

==tape
[3]
00100`)
        ];
    }
}

type ABC = "a" | "b" |"c"
type CDE = "C" | "D" |"E"


type TypeExclude = Exclude<ABC,CDE> // coloca todos que estao em ABC, que nao estao em CDE 
type TypeExtract = Extract<ABC,CDE> // Mostra qual aparece nos dois

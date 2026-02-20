class Estudiante:
    def __init__(self, nombre, edad, grado):
        self.nombre = nombre
        self.edad = edad + " años"
        self.grado = grado
    
    def estudiar(self):
        print(f"El estudiante {self.nombre} esta estudiando")
    
    def get_nombre(self):
        return self.nombre
    
    def get_edad(self):
        return self.edad
    
    def get_grado(self):
        return self.grado

nombre = input("Escribe tu nombre: ")
edad = input("Escribe tu edad: ")
grado = input("Escribe el grado que cursas actualmente: ")

objAlumno = Estudiante(nombre, edad, grado)

if input("Que estas haciendo?: ").lower() == "estudiando":
    objAlumno.estudiar()


print(f"""
      Datos del estudiante: \n\n
      Nombre: {objAlumno.get_nombre()} \n
      Edad: {objAlumno.get_edad()} \n
      Grado: {objAlumno.get_grado()} \n
      """)
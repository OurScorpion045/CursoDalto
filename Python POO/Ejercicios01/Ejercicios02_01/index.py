from Usuario import Usuario

nombre = input("Escribe tu nombre: ")
correo = input("Escribe tu direccion de correo electronico: ")

objUsuario = Usuario(nombre, correo)

nombre_obj = objUsuario.nombre
correo_obj = objUsuario.correo

print(f"""
Nombre: {nombre_obj} \n
Correo: {correo_obj} \n
      """)
class Usuario:
    def __init__(self, nombre, correo):
        self.__nombre = nombre
        self.__correo = correo
    
    @property
    def nombre(self):
        return self.__nombre
    
    @nombre.setter
    def nombre(self, nuevo_nombre):
        if not isinstance(nuevo_nombre, str):
            raise TypeError("Error, debes escribir un nombre")
        elif nuevo_nombre == "":
            raise ValueError("Error, el campo esta vacio")
        else:
            self.__nombre = nuevo_nombre
    
    @property
    def correo(self):
        return self.__correo
    
    @correo.setter
    def correo(self, nuevo_correo):
        if not isinstance(nuevo_correo, str):
            raise TypeError("Error, debes escribir una direccion de correo")
        elif nuevo_correo == "":
            raise ValueError("Error, el campo esta vacio")
        elif not "@" in nuevo_correo:
            raise ValueError("Error, debes escribir una direccion de correo")
        else:
            self.__correo = nuevo_correo


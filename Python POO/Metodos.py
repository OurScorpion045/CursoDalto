class Celular:
    def __init__(self, marca, modelo, camara):
        self.marca = marca
        self.modelo = modelo
        self.camara = camara
    
    def llamar(self):
        print(f"Estas haciendo una llamada desde tu dispositivo {self.marca} {self.modelo}")
    
    def cortar(self):
        print(f"Cortaste la llamada desde tu dispositivo {self.marca} {self.modelo}")
    
    def getMarca(self):
        return self.marca
    
    def getModelo(self):
        return self.modelo
    
    def getCamara(self):
        return self.camara

celular01 = Celular("Samsung", "S23", "48MP")
celular02 = Celular("Apple", "Iphone17", "96MP")

print(celular01.getMarca())
print(celular01.getModelo())
print(celular01.getCamara())
celular01.llamar()
celular01.cortar()
class Celular:
    def __init__(self, marca, modelo, camara):
        self.marca = marca
        self.modelo = modelo
        self.camara = camara

celular01 = Celular("Samsung", "S23", "48MP")
celular02 = Celular("Apple", "Iphone17", "96MP")
print(celular01.marca)
print(celular02.marca)
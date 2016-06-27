class App():
    def __init__(self):
        self.var1 = 15

    def calculate(self):
        self.result = self.var1 * 4 + 2

    def retrieve(self):
        return self.result

if __name__ == "__main__":
    app = App()
    app.calculate()
print(app.retrieve)

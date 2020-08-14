from django.db import models

# Create your models here.

class Customer(models.Model):
  def __str__(self):
    return self.name
  name = models.CharField(max_length=200)

class Study(models.Model):
  def __str__(self):
    return self.name
  customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
  name = models.CharField(max_length=200)

class User(models.Model):
  def __str__(self):
    return self.first_name + self.last_name
  customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
  study = models.ManyToManyField(Study)
  first_name= models.CharField(max_length=200)
  last_name = models.CharField(max_length=200)
  email = models.CharField(max_length=200)

class Test(models.Model):
  def __str__(self):
    return self.name
  createdByUser = models.ForeignKey(User, on_delete=models.CASCADE)
  name = models.CharField(max_length=200)
  kind = models.CharField(max_length=200) #screener or study

class Question(models.Model):
  def __str__(self):
    return self.text
  test = models.ForeignKey(Test, on_delete=models.CASCADE)
  text = models.CharField(max_length=500)
  answer = models.CharField(max_length=500)
  kind = models.CharField(max_length=200)

class QuestionChoice(models.Model):
  def __str__(self):
    return self.value
  question = models.ForeignKey(Question, on_delete=models.CASCADE)
  value = models.CharField(max_length=500)




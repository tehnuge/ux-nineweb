from django.contrib import admin
from .models import User, Question, QuestionChoice, Customer, Study, Test

admin.site.register(Question)
admin.site.register(User)
admin.site.register(QuestionChoice)
admin.site.register(Customer)
admin.site.register(Study)
admin.site.register(Test)

# Register your models here.

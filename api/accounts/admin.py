from django.contrib import admin
from .models import UserAccount, UserAccountManager


class UserAccountAdmin(admin.ModelAdmin):
    list_display = ("email", "first_name", "last_name",
                    "phone_number", "is_active", "is_staff",)
    search_fields = ("email", "first_name", "last_name",
                     "phone_number",)


admin.site.register(UserAccount, UserAccountAdmin)

<template>
  <div class="my-profile">
    <table>
      <tr>
        <td>Имя пользователя</td>
        <td>{{ myProfile.userName }}</td>
      </tr>
      <tr>
        <td>Адрес электронной почты</td>
        <td>{{ myProfile.email }}</td>
      </tr>
      <tr>
        <td>Имя, Фамилия</td>
        <td>{{ myProfile.firstName }} {{ myProfile.lastName }}</td>
      </tr>
      <tr>
        <td>Дата рождения</td>
        <td>{{ myProfile.birthDate }}</td>
      </tr>
      <tr>
        <td>Номер телефона</td>
        <td>{{ myProfile.phoneNumber }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyProfile',
  data() {
    return {
      myProfile: {
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        phoneNumber: '',
      },
    };
  },
  mounted() {
    axios.get('/api/user/profile').then(function(response) {
      this.myProfile = response.data;
    }.bind(this));
  },
};
</script>
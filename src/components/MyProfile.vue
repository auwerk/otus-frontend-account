<template>
  <div class="my-profile-view" v-if="!editMode">
    <table>
      <tr>
        <td class="prop-key">Имя пользователя</td>
        <td>{{ myProfile.userName }}</td>
      </tr>
      <tr>
        <td class="prop-key">Адрес электронной почты</td>
        <td>{{ myProfile.email }}</td>
      </tr>
      <tr>
        <td class="prop-key">Имя, Фамилия</td>
        <td>{{ myProfile.firstName }} {{ myProfile.lastName }}</td>
      </tr>
      <tr>
        <td class="prop-key">Дата рождения</td>
        <td>{{ myProfile.birthDate }}</td>
      </tr>
      <tr>
        <td class="prop-key">Номер телефона</td>
        <td>{{ myProfile.phoneNumber }}</td>
      </tr>
      <tr>
        <td>
          <button v-on:click="editProfile">Редактировать</button>
        </td>
        <td><span class="error-message">{{ errorMessage }}</span></td>
      </tr>
    </table>
  </div>
  <div class="my-profile-edit" v-if="editMode">
    <form>
      <table>
        <tr>
          <td class="prop-key">Имя пользователя</td>
          <td><input v-model="myProfile.userName" readonly/></td>
        </tr>
        <tr>
          <td class="prop-key">Адрес электронной почты</td>
          <td><input v-model="myProfile.email" placeholder="vanya@mail.ru"/></td>
        </tr>
        <tr>
          <td class="prop-key">Имя</td>
          <td><input v-model="myProfile.firstName" placeholder="Иван"/></td>
        </tr>
        <tr>
          <td class="prop-key">Фамилия</td>
          <td><input v-model="myProfile.lastName" placeholder="Иванов"/></td>
        </tr>
        <tr>
          <td class="prop-key">Дата рождения</td>
          <td><input v-model="myProfile.birthDate" placeholder="01.01.1961"/></td>
        </tr>
        <tr>
          <td class="prop-key">Номер телефона</td>
          <td><input v-model="myProfile.phoneNumber" placeholder="89001617878"/></td>
        </tr>
        <tr>
          <td>
            <button :disabled="inRequest" v-on:click="saveChanges">Сохранить</button>
            <button v-on:click="editMode=false">Отменить</button>
          </td>
          <td><span class="error-message">{{ errorMessage }}</span></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyProfile',
  data() {
    return {
      editMode: false,
      errorMessage: '',
      inRequest: false,
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
    }.bind(this)).catch(function(response) {
      console.log(response);
      this.errorMessage = 'Ошибка при загрузке';
    }.bind(this));
  },
  methods: {
    editProfile() {
      this.editMode = true;
      this.errorMessage = '';
    },
    saveChanges() {
      this.errorMessage = '';
      this.inRequest = true;
      axios.put('/api/user/profile', this.myProfile).then(function(response) {
        console.log(response);
        this.editMode = false;
        this.inRequest = false;
      }.bind(this)).catch(function(response) {
        console.log(response);
        this.errorMessage = 'Ошибка при сохранении';
        this.inRequest = false;
      }.bind(this));
    },
  },
};
</script>

<style>
td.prop-key {
  text-align: right;
}

span.error-message {
  color: red;
  font-style: italic;
}
</style>

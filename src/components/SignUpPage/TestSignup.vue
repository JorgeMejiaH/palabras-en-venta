<template>
    <div class="background-container">
      <sign-up-header />
      <div class="register-container">
        <div class="first-column">
          <h1 class="txt-welcome-sign-up">¡Bienvenido!</h1>
          <h2 class="txt-register">Crea tu cuenta</h2>
          <user-names-last-names @validNames="validarNombres" />
          <date-input @fechaValida="validarFecha" />
          <place-of-birth @validBirthPlace="validarLugarNacimiento" />
          <user-direction @validDirection="validarDireccion" />
          <user-gender @validGenre="validarGenero" />
          <spam-checkbox />
        </div>
        <div class="second-column">
          <div class="link-container">
            <p class="txt-not-account">¿Ya tienes cuenta?</p>
            <router-link to="/login" class="link-login">
              Ingresa Aquí
            </router-link>
          </div>
          <document-type @tipoDocumentoValido="validarTipoDocumento" />
          <document-number @documentoValido="validarDocumento" />
          <user-email @validEmail="validarEmail" />
          <username-input-sign-up @validUsername="validarUsername" />
          <password-input-sign-up @contraseñaValida="validarContraseña" />
        </div>
      </div>
      <div class="genre-container">
        <h1 class="genre-title">Escoge uno o más géneros</h1>
        <h2 class="genre-subtitle">
          Esto nos ayudará a recomendarte obras o autores que te gusten
        </h2>
        <div class="genre-select-container">
          <div
            v-for="(genre, index) in genres"
            :key="index"
            class="genre-selection-item"
            @click="toggleSelection(genre)"
          >
            <div :class="{ selected: selectedGenres.includes(genre) }"></div>
            <img
              :src="getImagePath(genre)"
              :alt="`${genre} genre`"
              class="genre-image"
            />
            <div class="checkbox-genres-container">
              <h5 class="genre-name-txt">{{ genre }}</h5>
              <input
                type="checkbox"
                :class="'checkbox-GenresUser-' + genre.toLowerCase()"
                v-model="selectedGenres"
                :value="genre"
              />
            </div>
          </div>
        </div>
        <div class="genre-button-container">
          <h2 class="genre-condition">
            Debes seleccionar al menos una categoría para continuar
          </h2>
          <button
            class="genre-btn-end"
            :disabled="!validationForm"
            @click="navigateToLogin"
          >
            Finalizar
          </button>
        </div>
      </div>
    </div>
  </template>
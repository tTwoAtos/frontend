<script setup lang="ts">
import { Product } from '@/interfaces/IProduct';
import addProductValidation from '@/validations/addProductValidation';
import { useForm } from 'vee-validate';
import { Ref, ref } from 'vue';

const props = defineProps<{
    product: Product
    onClose?: () => void
}>()

const { defineField, errors, handleSubmit } = useForm({
    validationSchema: addProductValidation,
});

let expirationDate: Ref<string> = ref<string>(props.product.expirationDate)
const [name, nameAttrs] = defineField('name');
name.value = props.product?.name
const [quantity, quantityAttrs] = defineField('quantity');
name.value = props.product?.quantity
const [price, priceAttrs] = defineField('price');
name.value = props.product?.price


// Functions
const onSubmit = handleSubmit((values) => {
    const product: Product = {
        ...props.product,
        name: values.name,
        quantity: values.quantity,
        price: values.price,
    }

    let products = localStorage.products ? JSON.parse(localStorage.products) : {}
    products[product.id] = { ...product }
    localStorage.products = JSON.stringify(products)
})
</script>

<template>
    <v-form @submit.prevent="onSubmit">
        <v-text-field v-model="name" label="Nom" :error-messages="errors.name" />
        {{ expirationDate }}
        <v-text-field type="number" v-model="quantity" label="Nombre" :error-messages="errors.quantity" />
        <v-text-field type="number" v-model="price" label="Prix" :error-messages="errors.price" />

        <v-btn text="Annuler" @click="onClose" color="error" variant="outlined" />
        <v-btn type="submit" text="Valider" color="primary" />
    </v-form>
</template>
<script setup lang="ts">
import { Product } from '@/interfaces/IProduct';
import { ProductQuery } from '@/queries/productQueries';
import { addProductValidation } from '@/validations/ProductValidation';
import { useMutation } from '@tanstack/vue-query';
import { AxiosInstance } from 'axios';
import { useForm } from 'vee-validate';
import { Ref, inject, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
const axios: AxiosInstance | undefined = inject('axios')

const props = defineProps<{
    product: Product
    onClose?: () => void
}>()

const { defineField, errors, handleSubmit } = useForm({
    validationSchema: addProductValidation,
});

let expirationDate: Ref<string> = ref<string>(props.product.expirationDate)
const [name, nameAttrs] = defineField('name');
name.value = props.product.name
const [quantity, quantityAttrs] = defineField('quantity');
quantity.value = props.product?.quantity ?? 1
const [price, priceAttrs] = defineField('price');
price.value = props.product?.price

const { mutate, isPending } = useMutation({
    mutationFn: (product: Product) => new ProductQuery(axios).addProduct(product),
    onError: (err) => {
        useToast().error(err.message)
    },
    onSuccess(data) {
        console.log(data);
    },
})

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

    mutate(product)
})
</script>

<template>
    <v-form @submit.prevent="onSubmit" class="w-100">
        <v-text-field id="name" v-model="name" label="Nom" :error-messages="errors.name" />
        {{ expirationDate }}
        <v-text-field id="quantity" type="number" v-model="quantity" label="Quantitée" :error-messages="errors.quantity" />
        <v-text-field id="price" type="number" v-model="price" label="Prix" :error-messages="errors.price" />

        <v-btn text="Annuler" @click="onClose" color="error" variant="outlined" />
        <v-btn type="submit" text="Valider" color="primary" :loading="isPending" />
    </v-form>
</template>
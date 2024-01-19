<script setup lang="ts">
import { Product } from '@/interfaces/product.interface';
import { Ref, ref } from 'vue';

// Component param
const props = defineProps<{
    product: Product
    isOpen?: boolean
}>()

// Local props
let isOpen: Ref<boolean> = ref<boolean>(props.isOpen ?? true)
let name: Ref<string> = ref<string>(props.product.name)
let quantity: Ref<number> = ref<number>(props.product.quantity ?? 1)
let expirationDate: Ref<string> = ref<string>(props.product.expirationDate)
let price: Ref<number | undefined> = ref<number | undefined>(props.product?.price)

// Functions
async function onSubmit(event: any) {
    event.preventDefault()

    const product: Product = {
        ...props.product,
        name: name.value,
        quantity: quantity.value,
        price: price.value,
    }

    let products = localStorage.products ? JSON.parse(localStorage.products) : {}
    products[product.id] = { ...product }
    localStorage.products = JSON.stringify(products)


}
</script>

<template>
    <v-dialog width="500" v-model="isOpen">
        <template v-slot:default="{ isActive = isOpen }">
            <v-card title="Ajouter un produit">
                <v-card-actions>
                    <v-form validate-on="submit lazy" @submit="onSubmit">
                        <v-text-field v-model="name" label="Nom" />
                        {{ expirationDate }}
                        <v-text-field type="number" v-model="quantity" label="Nombre" />
                        <v-text-field type="number" v-model="price" label="Prix" />

                        <v-btn text="Annuler" @click="isOpen = false" color="red" />
                        <v-btn type="submit" text="Valider" />
                    </v-form>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
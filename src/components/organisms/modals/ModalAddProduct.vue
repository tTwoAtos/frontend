<script setup lang="ts">
import { Product } from '@/interfaces/IProduct';
import { Ref, ref } from 'vue';

// Component param
const props = defineProps<{
    product: Product
    isOpen?: boolean
}>()

// Local props
let isOpen: Ref<boolean> = ref<boolean>(props.isOpen ?? true)
</script>
    
<template>
    <v-dialog width="500" v-model="isOpen">
        <template v-slot:default="{ isActive = isOpen }">
            <v-card title="Ajouter un produit">
                <v-card-actions>
                    <form-add-product :product="product" :onClose="() => isOpen = false" />
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
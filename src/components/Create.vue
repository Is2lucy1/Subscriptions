<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Subscription</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="subscription.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="subscription.description" required>
                </div>

                <div class="form-group">
                    <label>Amount</label>
                    <input type="number" class="form-control" v-model="subscription.amount" required>
                </div>

                <div class="form-group">
                    <label>Payment Frequency</label>
                    <select id='frequency' class="form-control" v-model="subscription.frequency">
                      <option value='weekly'>Weekly</option>
                      <option value='monthly'>Monthly</option>
                      <option value='quarterly'>Quarterly</option>
                      <option value='biannually'>Bi-annually</option>
                      <option value='annually'>Annually</option>
                    </select>
                    <!--input type="text" class="form-control" v-model="subscription.frequency" required-->
                </div>
                

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Subscription</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb.js'

export default {
  data () {
    return {
      subscription: {
      }
    }
  },
  methods: {
    onFormSubmit (event) {
      event.preventDefault()
      db.collection('subscriptions').add(this.subscription).then(() => {
        alert('Subscription successfully created!')
        this.subscription.name = ''
        this.subscription.description = ''
        this.subscription.amount = ''
        this.subscription.frequency = ''
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>




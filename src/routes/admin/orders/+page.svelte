<!-- src/routes/admin/orders/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import type { PageData, ActionData } from './$types';

  export let data: PageData;
  export let form: ActionData;

  let editingCell: { orderId: number; field: string } | null = null;
  let editValue = '';

  function startEdit(orderId: number, field: string, currentValue: any) {
    editingCell = { orderId, field };
    editValue = currentValue?.toString() || '';
  }

  function cancelEdit() {
    editingCell = null;
    editValue = '';
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function getStatusColor(status: string) {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'CONFIRMED': return 'bg-blue-100 text-blue-800';
      case 'SHIPPED': return 'bg-purple-100 text-purple-800';
      case 'DELIVERED': return 'bg-green-100 text-green-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  function changePage(newPage: number) {
    goto(`/admin/orders?page=${newPage}`);
  }

  $: if (form?.success) {
    editingCell = null;
    editValue = '';
  }
</script>

<svelte:head>
  <title>Administration - Commandes</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold text-gray-900">Gestion des Commandes</h1>
    <div class="text-sm text-gray-500">
      {data.pagination.totalCount} commandes au total
    </div>
  </div>

  {#if form?.error}
    <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
      {form.error}
    </div>
  {/if}

  {#if form?.success}
    <div class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
      Commande mise à jour avec succès !
    </div>
  {/if}

  <!-- Tableau des commandes -->
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Box</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {#each data.orders as order}
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                #{order.id}
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <div class="font-medium">{order.user.name || ''} {order.user.surname || ''}</div>
                  <div class="text-gray-500">{order.user.email}</div>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {order.box.name}
              </td>
              
              <!-- Statut éditable -->
              <td class="px-6 py-4 whitespace-nowrap">
                {#if editingCell?.orderId === order.id && editingCell?.field === 'status'}
                  <form method="post" action="?/updateOrder" use:enhance>
                    <input type="hidden" name="orderId" value={order.id} />
                    <input type="hidden" name="field" value="status" />
                    <select name="value" bind:value={editValue} class="text-xs px-2 py-1 border rounded">
                      <option value="PENDING">PENDING</option>
                      <option value="CONFIRMED">CONFIRMED</option>
                      <option value="SHIPPED">SHIPPED</option>
                      <option value="DELIVERED">DELIVERED</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                    <div class="flex gap-1 mt-1">
                      <button type="submit" class="text-xs bg-green-600 text-white px-2 py-1 rounded">✓</button>
                      <button type="button" on:click={cancelEdit} class="text-xs bg-gray-600 text-white px-2 py-1 rounded">✗</button>
                    </div>
                  </form>
                {:else}
                  <button 
                    class="inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer {getStatusColor(order.status)}"
                    on:dblclick={() => startEdit(order.id, 'status', order.status)}
                  >
                    {order.status}
                </button>
                {/if}
              </td>
              
              <!-- Prix éditable -->
              <td class="px-6 py-4 whitespace-nowrap">
                {#if editingCell?.orderId === order.id && editingCell?.field === 'price'}
                  <form method="post" action="?/updateOrder" use:enhance>
                    <input type="hidden" name="orderId" value={order.id} />
                    <input type="hidden" name="field" value="price" />
                    <input 
                      type="number" 
                      step="0.01" 
                      name="value" 
                      bind:value={editValue} 
                      class="w-20 text-sm px-2 py-1 border rounded"
                    />
                    <div class="flex gap-1 mt-1">
                      <button type="submit" class="text-xs bg-green-600 text-white px-2 py-1 rounded">✓</button>
                      <button type="button" on:click={cancelEdit} class="text-xs bg-gray-600 text-white px-2 py-1 rounded">✗</button>
                    </div>
                  </form>
                {:else}
                  <button 
                    class="text-sm text-gray-900 cursor-pointer hover:bg-gray-100 px-1 rounded"
                    on:dblclick={() => startEdit(order.id, 'price', order.price)}
                  >
                    {order.price.toFixed(2)}€
                </button>
                {/if}
              </td>
              
              <td class="px-6 py-4 text-sm text-gray-900">
                <div class="max-w-xs truncate">
                  {order.address.street}, {order.address.postalCode} {order.address.city}
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {formatDate(order.orderedAt.toISOString())}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Pagination -->
  <div class="flex items-center justify-between mt-6">
    <div class="flex items-center text-sm text-gray-700">
      Page {data.pagination.currentPage} sur {data.pagination.totalPages}
      ({((data.pagination.currentPage - 1) * 50) + 1} - {Math.min(data.pagination.currentPage * 50, data.pagination.totalCount)} sur {data.pagination.totalCount})
    </div>
    
    <div class="flex gap-2">
      {#if data.pagination.hasPrev}
        <button 
          on:click={() => changePage(1)}
          class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          disabled={data.pagination.currentPage === 1}
        >
          ««
        </button>
        <button 
          on:click={() => changePage(data.pagination.currentPage - 1)}
          class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          ‹ Précédent
        </button>
      {/if}
      
      <!-- Pages numériques -->
      {#each Array.from({length: Math.min(5, data.pagination.totalPages)}, (_, i) => {
        const startPage = Math.max(1, data.pagination.currentPage - 2);
        return startPage + i;
      }) as pageNum}
        {#if pageNum <= data.pagination.totalPages}
          <button 
            on:click={() => changePage(pageNum)}
            class="px-3 py-1 text-sm rounded {pageNum === data.pagination.currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
          >
            {pageNum}
          </button>
        {/if}
      {/each}
      
      {#if data.pagination.hasNext}
        <button 
          on:click={() => changePage(data.pagination.currentPage + 1)}
          class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Suivant ›
        </button>
        <button 
          on:click={() => changePage(data.pagination.totalPages)}
          class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          disabled={data.pagination.currentPage === data.pagination.totalPages}
        >
          »»
        </button>
      {/if}
    </div>
  </div>
</div>

<style>
    .container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.font-bold {
  font-weight: 700;
}

.text-gray-900 {
  color: #1f2937;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-gray-500 {
  color: #6b7280;
}

.bg-red-50 {
  background-color: #fef2f2;
}

.border {
  border-width: 1px;
}

.border-red-200 {
  border-color: #fecaca;
}

.text-red-700 {
  color: #b91c1c;
}

.bg-green-50 {
  background-color: #f0fdf4;
}

.border-green-200 {
  border-color: #bbf7d0;
}

.text-green-700 {
  color: #15803d;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.rounded {
  border-radius: 0.25rem;
}

.bg-white {
  background-color: white;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-x-auto {
  overflow-x: auto;
}

.min-w-full {
  min-width: 100%;
}

.divide-y > * + * {
  border-top: 1px solid #e5e7eb;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.text-left {
  text-align: left;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-medium {
  font-weight: 500;
}

.uppercase {
  text-transform: uppercase;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.text-gray-800 {
  color: #1f2937;
}

.divide-gray-200 > * + * {
  border-top-color: #e5e7eb;
}

.hover\:bg-gray-50:hover {
  background-color: #f9fafb;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.text-sm {
  font-size: 0.875rem;
}

.font-semibold {
  font-weight: 600;
}

.inline-flex {
  display: inline-flex;
  align-items: center;
}

.cursor-pointer {
  cursor: pointer;
}

.max-w-xs {
  max-width: 20rem;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.w-20 {
  width: 5rem;
}

.gap-1 {
  gap: 0.25rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.bg-green-600 {
  background-color: #16a34a;
}

.text-white {
  color: white;
}

.bg-gray-600 {
  background-color: #4b5563;
}

.hover\:bg-gray-100:hover {
  background-color: #f3f4f6;
}

.bg-yellow-100 {
  background-color: #fef9c3;
}

.text-yellow-800 {
  color: #854d0e;
}

.bg-blue-100 {
  background-color: #dbeafe;
}

.text-blue-800 {
  color: #1e3a8a;
}

.bg-purple-100 {
  background-color: #f3e8ff;
}

.text-purple-800 {
  color: #6b21a8;
}

.bg-green-100 {
  background-color: #dcfce7;
}

.bg-red-100 {
  background-color: #fee2e2;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.text-gray-700 {
  color: #374151;
}

.mt-6 {
  margin-top: 1.5rem;
}

.gap-2 {
  gap: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.bg-gray-200 {
  background-color: #e5e7eb;
}

.hover\:bg-gray-300:hover {
  background-color: #d1d5db;
}

.bg-blue-600 {
  background-color: #2563eb;
}
</style>
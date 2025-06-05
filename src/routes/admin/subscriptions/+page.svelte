<!-- src/routes/admin/subscriptions/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import type { PageData, ActionData } from './$types';

  export let data: PageData;
  export let form: ActionData;

  let editingCell: { subscriptionId: number; field: string } | null = null;
  let editValue = '';

  function startEdit(subscriptionId: number, field: string, currentValue: any) {
    editingCell = { subscriptionId, field };
    editValue = currentValue?.toString() || '';
  }

  function cancelEdit() {
    editingCell = null;
    editValue = '';
  }

  function formatDate(date: string | null) {
    if (!date) return 'Non définie';
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function formatDateForInput(date: string) {
    return new Date(date).toISOString().slice(0, 16);
  }

  function changePage(newPage: number) {
    goto(`/admin/subscriptions?page=${newPage}`);
  }

  $: if (form?.success) {
    editingCell = null;
    editValue = '';
  }
</script>

<svelte:head>
  <title>Administration - Abonnements</title>
</svelte:head>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #1a1a1a;
    margin: 0;
  }

  .total-count {
    font-size: 0.875rem;
    color: #6b7280;
  }

  .alert {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    border: 1px solid;
  }

  .alert-error {
    background-color: #fef2f2;
    border-color: #fecaca;
    color: #b91c1c;
  }

  .alert-success {
    background-color: #f0fdf4;
    border-color: #bbf7d0;
    color: #166534;
  }

  .table-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .table-wrapper {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    background-color: #f9fafb;
    padding: 0.75rem 1.5rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #e5e7eb;
  }

  td {
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    color: #1f2937;
    border-bottom: 1px solid #f3f4f6;
  }

  tr:hover {
    background-color: #f9fafb;
  }

  .status-badge {
    display: inline-flex;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 9999px;
    cursor: pointer;
  }

  .status-active {
    background-color: #dcfce7;
    color: #166534;
  }

  .status-inactive {
    background-color: #fee2e2;
    color: #dc2626;
  }

  .editable-cell {
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .editable-cell:hover {
    background-color: #f3f4f6;
  }

  .edit-form {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .edit-input {
    padding: 0.25rem 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.875rem;
  }

  .edit-select {
    padding: 0.25rem 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 0.875rem;
    background: white;
  }

  .edit-buttons {
    display: flex;
    gap: 0.25rem;
  }

  .btn {
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 4px;
    font-size: 0.75rem;
    cursor: pointer;
    font-weight: 500;
  }

  .btn-success {
    background-color: #16a34a;
    color: white;
  }

  .btn-cancel {
    background-color: #6b7280;
    color: white;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .user-info {
    display: flex;
    flex-direction: column;
  }

  .user-name {
    font-weight: 500;
  }

  .user-email {
    color: #6b7280;
    font-size: 0.75rem;
  }

  .address-info {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .pagination-info {
    font-size: 0.875rem;
    color: #374151;
  }

  .pagination-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .pagination-btn {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    border: 1px solid #d1d5db;
    background: white;
    color: #374151;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }

  .pagination-btn:hover:not(:disabled) {
    background-color: #f3f4f6;
  }

  .pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .pagination-btn.active {
    background-color: #3b82f6;
    color: white;
    border-color: #3b82f6;
  }
</style>

<div class="container">
  <div class="header">
    <h1 class="title">Gestion des Abonnements</h1>
    <div class="total-count">
      {data.pagination.totalCount} abonnements au total
    </div>
  </div>

  {#if form?.error}
    <div class="alert alert-error">
      {form.error}
    </div>
  {/if}

  {#if form?.success}
    <div class="alert alert-success">
      Abonnement mis à jour avec succès !
    </div>
  {/if}

  <!-- Tableau des abonnements -->
  <div class="table-container">
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Box</th>
            <th>Statut</th>
            <th>Prix</th>
            <th>Date début</th>
            <th>Date fin</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          {#each data.subscriptions as subscription}
            <tr>
              <td>#{subscription.id}</td>
              
              <td>
                <div class="user-info">
                  <div class="user-name">{subscription.user?.name || ''} {subscription.user?.surname || ''}</div>
                  <div class="user-email">{subscription.user?.email || 'Email non disponible'}</div>
                </div>
              </td>
              
              <td>{subscription.box?.name || 'Box non disponible'}</td>
              
              <!-- Statut éditable -->
              <td>
                {#if editingCell?.subscriptionId === subscription.id && editingCell?.field === 'isActive'}
                  <form method="post" action="?/updateSubscription" use:enhance class="edit-form">
                    <input type="hidden" name="subscriptionId" value={subscription.id} />
                    <input type="hidden" name="field" value="isActive" />
                    <select name="value" bind:value={editValue} class="edit-select">
                      <option value="true">Actif</option>
                      <option value="false">Inactif</option>
                    </select>
                    <div class="edit-buttons">
                      <button type="submit" class="btn btn-success">✓</button>
                      <button type="button" on:click={cancelEdit} class="btn btn-cancel">✗</button>
                    </div>
                  </form>
                {:else}
                  <button 
                    class="status-badge {subscription.isActive ? 'status-active' : 'status-inactive'}"
                    on:dblclick={() => startEdit(subscription.id, 'isActive', subscription.isActive)}
                  >
                    {subscription.isActive ? 'Actif' : 'Inactif'}
                </button>
                {/if}
              </td>
              
              <!-- Prix éditable -->
              <td>
                {#if editingCell?.subscriptionId === subscription.id && editingCell?.field === 'price'}
                  <form method="post" action="?/updateSubscription" use:enhance class="edit-form">
                    <input type="hidden" name="subscriptionId" value={subscription.id} />
                    <input type="hidden" name="field" value="price" />
                    <input 
                      type="number" 
                      step="0.01" 
                      name="value" 
                      bind:value={editValue} 
                      class="edit-input"
                      style="width: 80px;"
                    />
                    <div class="edit-buttons">
                      <button type="submit" class="btn btn-success">✓</button>
                      <button type="button" on:click={cancelEdit} class="btn btn-cancel">✗</button>
                    </div>
                  </form>
                {:else}
                  <button
                    class="editable-cell"
                    on:dblclick={() => startEdit(subscription.id, 'price', subscription.price)}
                  >
                    {subscription.price.toFixed(2)}€
                </button>
                {/if}
              </td>
              
              <!-- Date début éditable -->
              <td>
                {#if editingCell?.subscriptionId === subscription.id && editingCell?.field === 'startDate'}
                  <form method="post" action="?/updateSubscription" use:enhance class="edit-form">
                    <input type="hidden" name="subscriptionId" value={subscription.id} />
                    <input type="hidden" name="field" value="startDate" />
                    <input 
                      type="datetime-local" 
                      name="value" 
                      bind:value={editValue} 
                      class="edit-input"
                    />
                    <div class="edit-buttons">
                      <button type="submit" class="btn btn-success">✓</button>
                      <button type="button" on:click={cancelEdit} class="btn btn-cancel">✗</button>
                    </div>
                  </form>
                {:else}
                <button 
                class="editable-cell"
                on:dblclick={() => startEdit(subscription.id, 'startDate', subscription.startDate)}
                >
                {subscription.startDate}
                </button>
                {/if}
              </td>
              
              <!-- Date fin éditable -->
              <td>
                {#if editingCell?.subscriptionId === subscription.id && editingCell?.field === 'endDate'}
                  <form method="post" action="?/updateSubscription" use:enhance class="edit-form">
                    <input type="hidden" name="subscriptionId" value={subscription.id} />
                    <input type="hidden" name="field" value="endDate" />
                    <input 
                      type="datetime-local" 
                      name="value" 
                      bind:value={editValue} 
                      class="edit-input"
                    />
                    <div class="edit-buttons">
                      <button type="submit" class="btn btn-success">✓</button>
                      <button type="button" on:click={cancelEdit} class="btn btn-cancel">✗</button>
                    </div>
                  </form>
                {:else}
                  <button
                    class="editable-cell"
                    on:dblclick={() => startEdit(subscription.id, 'endDate', subscription.endDate ? subscription.endDate : '')}
                  >
                    {subscription.endDate}
                </button>
                {/if}
              </td>
              
              <td>
                <div class="address-info" title="{subscription.address?.street || ''}, {subscription.address?.postalCode || ''} {subscription.address?.city || ''}">
                  {subscription.address?.street || 'Adresse'}, {subscription.address?.postalCode || ''} {subscription.address?.city || 'non disponible'}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Pagination -->
  <div class="pagination">
    <div class="pagination-info">
      Page {data.pagination.currentPage} sur {data.pagination.totalPages}
      ({((data.pagination.currentPage - 1) * 50) + 1} - {Math.min(data.pagination.currentPage * 50, data.pagination.totalCount)} sur {data.pagination.totalCount})
    </div>
    
    <div class="pagination-buttons">
      {#if data.pagination.hasPrev}
        <button 
          on:click={() => changePage(1)}
          class="pagination-btn"
          disabled={data.pagination.currentPage === 1}
        >
          ««
        </button>
        <button 
          on:click={() => changePage(data.pagination.currentPage - 1)}
          class="pagination-btn"
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
            class="pagination-btn {pageNum === data.pagination.currentPage ? 'active' : ''}"
          >
            {pageNum}
          </button>
        {/if}
      {/each}
      
      {#if data.pagination.hasNext}
        <button 
          on:click={() => changePage(data.pagination.currentPage + 1)}
          class="pagination-btn"
        >
          Suivant ›
        </button>
        <button 
          on:click={() => changePage(data.pagination.totalPages)}
          class="pagination-btn"
          disabled={data.pagination.currentPage === data.pagination.totalPages}
        >
          »»
        </button>
      {/if}
    </div>
  </div>
</div>
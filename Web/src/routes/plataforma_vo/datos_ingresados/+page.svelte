<div class="two">
    <table>
        <tr>
          <th>Potrero</th>
          <th>Área (ha)</th>
        </tr>
        <tr>
          <td>Potrero 1</td>
          <td>200</td>
        </tr>
        <tr>
          <td>Potrero 2</td>
          <td>500</td>
        </tr>
    </table>
    <div class="button">
        <button>Modificar</button>
    </div>

</div>

<style lang="css">
    table {
		@apply mt-4 border-separate border-spacing-0;
		min-width: 350px;
	}

	table tr th,
	table tr td {
		@apply p-1 border-r-2 border-b-2 border-solid;
		border-color: var(--blanco_fondo);
	}

	table tr th:first-child,
	table tr td:first-child {
		@apply border-l-2 border-solid;
		border-color: var(--blanco_fondo);
	}

	table tr th {
		@apply border-t-2 border-b-4 border-solid text-center rounded-xl;
		background: var(--verde_primario);
		border-color: var(--blanco_fondo);
		color: var(--verde_fondos);
	}

	table tr td {
		background: var(--verde_fondos);
	}


	/* top-left border-radius */
	table tr:nth-child(2) td:first-child {
		@apply rounded-tl-md;
	}

	/* top-right border-radius */
	table tr:nth-child(2) td:nth-child(2) {
		@apply rounded-tr-md;
	}

	/* bottom-left border-radius */
	table tr:last-child td:first-child {
		@apply rounded-bl-md;
	}

	/* bottom-right border-radius */
	table tr:last-child td:last-child {
		@apply rounded-br-md;
	}

    button {
		@apply rounded-2xl w-32 h-6 text-center cursor-pointer mt-4;
		
		background-color: var(--verde_secundario);
		font-family: var(--letra_titulo);
		color: var(--verde_fondos);
	}

	button:hover {
		background-color: #33582c;
	}

    .button {
        @apply text-right;
    }
</style>
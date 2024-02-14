export default ({setLimit}) => <select
name="limit"
id="limit"
onChange={(e) => setLimit(e.target.value)}
>
<option value="10">10</option>
<option value="20">20</option>
<option value="50">50</option>
<option value="100">100</option>
</select>